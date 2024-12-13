#!/usr/bin/env python3
"""A function that finds schools by topic"""

def schools_by_topic(mongo_collection, topic):
    """
    Finds all schools that have a specific topic.

    Args:
        mongo_collection: The pymongo collection object.
        topic (str): The topic to search for.

    Returns:
        A list of matching school documents.
    """
    if mongo_collection is None or not topic:
        return []
    return list(mongo_collection.find({ "topics": topic }))
