import { useEffect } from 'react'

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Counter Num is ${count}`;
  }, [count]);
}

export default useDocumentTitle