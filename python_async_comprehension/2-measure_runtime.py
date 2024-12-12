#!/usr/bin/env python3
"""
Module async Generator that handles a runtime coroutine
with an async comprehension
"""

import asyncio
import time


async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime(n: int = 4) -> float:
    """
    Async Function that measures the time of imported
    async_comprehension called 4 times and returns
    the total execution time
    """
    start_time = time.time()
    coroutines = [async_comprehension() for i in range(n)]
    await asyncio.gather(*coroutines)
    end_time = time.time()
    total_time = end_time - start_time
    return total_time
