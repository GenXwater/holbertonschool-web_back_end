#!/usr/bin/env python3
""" Module to calculate the square of a float """


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Function to calculate the square of a float """
    return (k, v * v)
