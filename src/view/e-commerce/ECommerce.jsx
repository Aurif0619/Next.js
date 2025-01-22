"use client"

import React from 'react'
import { API_ENDPOINTS } from '@/api/api-endpoints'
import React, { useEffect } from 'react'

const ECommerce = () => {
    useEffect(() => {
        fetch(API_ENDPOINTS.ECommerce)
    }, []);
    return (
        <div>ECommerce</div>
    )
}

export default ECommerce;