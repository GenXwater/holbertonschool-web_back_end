#!/usr/bin/env python3
""" Module to return a list of tuples with the length of each element """


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ Function to return a list of tuples with the length of each element """
    return [(i, len(i)) for i in lst]
