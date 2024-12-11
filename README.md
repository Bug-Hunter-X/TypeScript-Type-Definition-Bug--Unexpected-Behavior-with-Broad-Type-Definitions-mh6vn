# TypeScript Type Definition Bug

This repository demonstrates a common bug in TypeScript where type definitions are too broad, leading to unexpected behavior. The bug occurs in the `add` and `subtract` functions, which have type definitions that accept any type of number (including strings). This results in the functions performing unexpected calculations when strings are passed as arguments.