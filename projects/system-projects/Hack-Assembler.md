### About Assembler
Assembler is a program that acts as a simple language translator (convert assembly language to machine language)

<img src="/static/assembly.png" alt="assembler" height="200" width="300"/>

[Project Link](https://github.com/amarjeet-saini/Hack-Assembler)

### Hack Assembler
program that translates programs written in the symbolic Hack assembly language into binary code.</br>
input file: xyz.asm <br /> 
output file: xyz.hack <br /> 

Hack assembly language consist of two types of instruction <br /> 
##### A-instruction: @value
A-instruction (addressing instruction) assigns value of const to register A i.e A <- const <br />
ROM[A] register is selected (ROM : Read only memory act as instruction memory)  <br /> 
##### C-instruction: dest=comp;jump
C-instruction (compute instruction) does basic computation assign valuse to destination. <br />
```
D = M+1 // where D and M are register
```
We can also perform branching based on value comp and opcode jump
```
D;JGT // if D > 0 jump to ROM[A]
```
### How to build Hack Assembler 


### Resources
[Nand2Tetris](https://www.nand2tetris.org/project06)

[Wiki](https://en.wikipedia.org/wiki/Assembly_language#Assembler)
