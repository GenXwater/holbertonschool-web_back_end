#!/usr/bin/env python3
"""
Module that create a asyncio task
"""
import asyncio


wait_random = __import__("0-basic_async_syntax").wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    sync Function that returns asyncio.Task after creating it with asyncio
    """
    task = asyncio.create_task(wait_random(max_delay))

    return task
