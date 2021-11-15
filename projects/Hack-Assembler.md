### About Assembler
Assembler is a program that acts as a simple language translator (convert assembly language to machine language)

<img src="/static/assembly.png" alt="assembler" height="200" width="300"/>

[Project Link](https://github.com/amarjeet-saini/Hack-Assembler)

### Hack Assembler
program that translates programs written in the symbolic Hack assembly language into binary code.</br>
input file: xyz.asm <br /> 
output file: xyz.hack <br /> 

Hack assembly language consist of two types of instruction <br />

* <strong>A-instruction: @value</strong> <br />
    A-instruction (addressing instruction) assigns value of const to register A i.e A <- const <br /> 
    ROM[A] register is selected (ROM : Read only memory act as instruction memory)  

* <strong>C-instruction: dest=comp;jump</strong><br /> 
  C-instruction (compute instruction) does basic computation assign valuse to destination. <br />
  
  ``` 
  D = M+1 // where D and M are register
  ```
  
  We can also perform branching based on value comp and opcode jump
  
  ```
  D;JGT // if D > 0 jump to ROM[A]
  ```

### How to build Hack Assembler 
Hack assembler can be build using the idea of <strong>2 pass assembler</strong>. <br />
<strong> pre-processing</strong> :- handle all white space and ignore comments <br />
<strong> 1-pass </strong> :- iterate over all instructions and build up symbol table <br />
<strong> 2-pass </strong> :- using symbol table and instruction translate into binary code. <br />

###### General approach
1. Preprocess by parse each line of .hack code ignoring white space (i.e. empty line, comments, identation)  <br /> 
   can be done using file handling and processing in Python. 
   ##### .hack code (input)
   ```
   // Computes R1=1 + ... + R0
   // i = 1
        @i
        M=1
   ...
   ```
   ##### symbolic code (output)
   ```
   @i
   M=1
   ...
   ```
2. Create a symbol table and add all 23 pre-defined hack symbols.
##### First pass 

3. If the instruction contain a symbol (i.e could be pre-defined, label or variable) add it to symbol table if only variable .
  eg) 
  ```
  | symbol | value |
  | -------| ------|
    ....
  | LOOP   |   4   |
  | STOP   |   18  |
  |   i    |   16  |  
  ```
##### Second pass
start from begining 
4. Translate each instruction (if w/o any symbol) directly . Need to figure out what type of instruction it is A-type or C-type can be done by just checking 
   whether inst. start with @ or not.
5. Then if A-TYPE: 
    ```
    @16            =>  0000000000010000
    ```
   and if C-type (find what is destn,comp and jump of inst. and decode acc.) 
   ```
   M=1             =>  1110111111001000
   ```
6. If the instruction contains symbols use the symbol table to parse it.
7. Keep writing output to the new file as we go through each instruction.
##### 
   
### Resources
[Nand2Tetris](https://www.nand2tetris.org/project06) <br />
[Hack assembler guide](https://drive.google.com/file/d/1uKGRMnL-gqk9DsgeN50z0EpHoSMWe6F5/view) <br />
[Wiki](https://en.wikipedia.org/wiki/Assembly_language#Assembler)
