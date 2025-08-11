#!/usr/bin/env python3
"""
Simple Pagination Module

This module provides a helper function for pagination calculations
and a Server class to paginate a database of popular baby names.
"""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end index for pagination.

    Args:
    page (int): The current page number (1-indexed)
    page_size (int): The number of items per page

    Returns:
    tuple: A tuple containing the start index (inclusive) and end index
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the Server instance."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset

        Returns:
            List[List]: The dataset excluding the header row
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get a page from the dataset.

        Args:
            page (int): The page number (1-indexed)
            page_size (int): The number of items per page

        Returns:
            List[List]: The requested page of data or empty list if out of range

        Raises:
            AssertionError: If page or page_size are not positive integers
        """
        # Verify that both arguments are integers greater than 0
        assert isinstance(page, int) and page > 0, "page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "page_size must be a positive integer"

        # Get the dataset
        dataset = self.dataset()
        
        # Calculate the start and end indexes
        start, end = index_range(page, page_size)
        
        # Return the appropriate page or empty list if out of range
        if start >= len(dataset):
            return []
        return dataset[start:end]
