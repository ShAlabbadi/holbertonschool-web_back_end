#!/usr/bin/env python3
"""
Write a type-annotated function to_kv that takes a string k and an int OR
float v as arguments and returns a tuple. The first element of the tuple is
the string k. The second element is the square of the int/float v & should be
annotated as a float.
"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """A function 'to_kv' takes a string 'k' and an int OR float 'v'
    and returns a tuple annotated as a float."""
    return k, v * v
