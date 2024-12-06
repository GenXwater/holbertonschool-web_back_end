#!/usr/bin/env python3
""" Module to multiply a number by a given multiplier """


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Function to multiply a number by a given multiplier """
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply
