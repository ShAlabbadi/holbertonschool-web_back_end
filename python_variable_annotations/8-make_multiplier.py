#!/usr/bin/env python3
"""
Write a type-annotated function make_multiplier that takes a float multiplier
as argument and returns a function that multiplies a float by multiplier.
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """A function 'make_multiplier' takes a float 'multiplier' and returns
    a function that multiplies a float by multiplier."""

    def multiply(n: float) -> float:
        """A function that multiplies a float by multiplier"""
        return multiplier * n

    return multiply
