import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { formatDate } from '@/app/blog/utils';

interface CardCategoryProps { title: string; summary: string; date: string }

function CardCategory({ title, summary, date }: CardCategoryProps) {
    return (
        <Card className='w-[350px] h-[290px] shadow-lg'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{summary}</p>
            </CardContent>
            <CardFooter>
                <p className='text-xs text-gray-500'>{formatDate(date)}</p>
            </CardFooter>
        </Card>
    )
}

export default CardCategory