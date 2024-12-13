#!/usr/bin/env python3
"""A function that updates the topics of a school document"""

def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a school document based on its name.

    Args:
        mongo_collection: The pymongo collection object.
        name (str): The school name to update.
        topics (list of str): The list of topics to set.

    Returns:
        The number of documents modified.
    """
    if mongo_collection is None or not name or not topics:
        return 0
    result = mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )
    return result.modified_count
