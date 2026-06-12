+++
title = "Getting Started with GDScript"
date = 2025-03-12
draft = false
+++

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Setting Up Your Project

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.

### Your First Script

Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.

Here is a simple hello world script in GDScript that also does a small computation:

```gdscript
extends Node

func _ready():
    var result = add_numbers(3, 7)
    print("Hello, World!")
    print("3 + 7 = " + str(result))

func add_numbers(a: int, b: int) -> int:
    return a + b
```

`a + 3 = 4`

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel ante a orci tempus eleifend ut et magna.

#### A Note on Types

Lorem ipsum dolor sit amet, consectetur adipiscing elit. GDScript is dynamically typed by default, but adding type hints like `int` and `-> int` above gives you autocomplete and catches bugs early.

Nullam varius, turpis molestie dictum semper, sem arcu maximus purus, vitae commodo leo quam nec dui.

## Running the Scene

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, sem arcu maximus purus, vitae commodo leo quam nec dui. Donec non enim in turpis pulvinar facilisis.

### Watching It Run

Here is what the node jumping around looks like once the scene is running:

{{< fig src="/gifs/BombBeetle.gif" alt="Bomb Beetle" caption="Here's a caption about the bomb beetle." >}}

Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luchtar. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.

### Next Steps

Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.

#### Expanding the Script

Nulla in ipsum. Praesent eros nulla, congue vitae, euismod ut, commodo a, wisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nonummy magna non leo.