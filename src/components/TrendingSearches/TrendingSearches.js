import React, { useState, useEffect } from 'react'

import Category from 'components/Category'
import { getTrendingTerms } from 'services/trendingTermsService'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])

  return <Category name='Tendencias' options={trends} />
}