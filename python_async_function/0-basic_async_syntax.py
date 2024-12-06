#!/usr/bin/env python3
"""
Module that explores async function with random delay
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Func that wait for a random delay between
    0 and max_delay seconds by default 10
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
