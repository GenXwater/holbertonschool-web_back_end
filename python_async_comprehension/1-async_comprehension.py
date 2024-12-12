#!/usr/bin/env python3
"""
Module async Generator that handles a coroutine
with an async comprehesion
"""
import asyncio
import random
from typing import AsyncGenerator, List

async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """ Async comprehension that generates 10 random floats using
        async_generator()"""
    return [value async for value in async_generator()]