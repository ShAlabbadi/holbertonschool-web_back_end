#!/usr/bin/env python3
"""
Simple Pagination Module

This module provides a helper function for pagination calculations
and a Server class to paginate a database of popular baby names.
"""
import csv
import math
from typing import List, Tuple

index_range = __import__("0-simple_helper_function").index_range


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
            List[List]: The requested page of data or empty list
            if out of range

        Raises:
            AssertionError: If page or page_size are not positive integers
        """

        assert type(page) is int and page > 0
        assert type(page_size) is int and page_size > 0
        _range = index_range(page, page_size)
        _start = _range[0]
        _end = _range[1]
        return self.dataset()[_start:_end]
