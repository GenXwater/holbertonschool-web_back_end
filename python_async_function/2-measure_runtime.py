#!/usr/bin/env python3
"""
Module that measures the runtime
"""
import time
import asyncio


wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    sync Function that returns the result of an async func
    with asyncio running:
    asyc func measures the time of the total execution
    for wait_n and returns total_time / n
    """
    async def async_time_measure():
        """ async func to measure total time"""
        start_time = time.time()
        await wait_n(n, max_delay)
        end_time = time.time()
        total_time = end_time - start_time
        return total_time / n

    return asyncio.run(async_time_measure())

# to correct errors without changing main,
# had to pass a async func inside the synch
# main func and returning it wth asyncio.run to execute it
