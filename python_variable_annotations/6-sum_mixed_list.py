#!/usr/bin/env python3
""" Module to sum a list of mixed integers and floats """


from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ Function to sum a list of mixed integers and floats """
    return sum(mxd_lst)
