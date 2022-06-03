import React, { useEffect, useState } from "react"
import BookList from "@/components/BookList"
import useSWR from "swr"
import { fetchBooks } from "@/lib/utils/utils"

const PAGE = "http://localhost:3000"

function ListPage() {
  const { data, error } = useSWR(PAGE, fetchBooks)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <BookList bookList={data.books} />
}

export default ListPage
