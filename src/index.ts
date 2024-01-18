import { mockDb, mockFetch } from "./mocks";

// mockDb: A function that mocks a database call. It returns an array of ads.txt entry string
//
// mockFetch: A function that mocks a fetch call to the ads.txt endpoint of a publisher.
// It returns a string similar to Result.text()
//
//
// Challenge: Create a function that compares entries from database and request. Return entries that are missing
//
//
