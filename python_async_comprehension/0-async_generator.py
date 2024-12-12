#!/usr/bin/env python3
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine asynchrone qui génère 10 nombres aléatoires compris entre 0 et 10.
    À chaque itération, la coroutine attend 1 seconde avant de produire le nombre.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
