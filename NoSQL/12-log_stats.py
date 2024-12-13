#!/usr/bin/env python3
"""A script that provides stats about Nginx logs"""

def log_stats(mongo_collection):
    """
    Displays statistics about Nginx logs stored in MongoDB.

    Args:
        mongo_collection: The pymongo collection object.

    Prints:
        - Total number of logs.
        - Number of logs for each HTTP method (GET, POST, PUT, PATCH, DELETE).
        - Number of GET requests to the `/status` endpoint.
    """
    if mongo_collection is None:
        print("No collection found")
        return

    total_logs = mongo_collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = mongo_collection.count_documents({ "method": method })
        print(f"\tmethod {method}: {count}")

    status_check = mongo_collection.count_documents({ "method": "GET", "path": "/status" })
    print(f"{status_check} status check")
