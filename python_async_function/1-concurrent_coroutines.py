#!/usr/bin/env python3
"""
Module that explores multiple coroutines
at the same time with async
"""
from typing import List
import asyncio

wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    async Function that executes imported wait_random n times
    and returns ascending order delays in a list
    """
    delays = await asyncio.gather(*[wait_random(max_delay) for _ in range(n)])
    # * => Unpacking operator used to pass each element of the list
    # as a separate argument to asyncio.gather()

    return sorted(delays)
