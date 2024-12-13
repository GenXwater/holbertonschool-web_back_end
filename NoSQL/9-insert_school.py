#!/usr/bin/env python3
"""A function that inserts a new document in a collection based on kwargs"""

def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a MongoDB collection based on keyword arguments.

    Args:
        mongo_collection: The pymongo collection object.
        kwargs: Key-value pairs representing the document fields.

    Returns:
        The ID of the inserted document, or None if insertion fails.
    """
    if mongo_collection is None:
        return None
    return mongo_collection.insert_one(kwargs).inserted_id
