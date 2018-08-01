
### drum machine created for fcc project

### not done yet. need to figure out how to elegantly solve case with 9 different key presses, without creating multiple components.
 *update* managed to use switch case( also not optimal ), expect for major overhaul and DRY'ed up code.
===

Creating this project I have learned:
1. React Parent-Children composition
2. React SyntheticEvents

You dont have to add event listeners like in vanilla js, react has defined specific event for each case.

Struggled with it, because event listeners would throw error because component wasn't rendered to DOM yet.



