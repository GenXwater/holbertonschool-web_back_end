#!/usr/bin/env python3
"""
Module that explores multiple coroutines
at the same time with async and tasks
"""
from typing import List
import asyncio

task_wait_random = __import__("3-tasks").task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    async Function that executes imported tasks_wait_random n times
    and returns ascending order delays in a list
    """
    delays = await asyncio.gather(*[task_wait_random(max_delay)
                                    for _ in range(n)])

    return sorted(delays)
