'use client';

import '@/app/globals.css';
import { Movie } from "@/interfaces/models"
import Link from "next/link"
import { useState } from "react";

interface MovieCardProps {
  movie: Movie
  rating: number
}

interface ValidationRule {
  required: boolean
  minLength: number
  maxLength: number
}

interface ValidationRules {
  [key: string]: ValidationRule
}

const validationRules: ValidationRules = {
  description: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  }
}

const validate = (data: { description: string }): {[key: string]: boolean} => {
  return Object.entries(data).reduce((acc: {[key: string]: boolean}, [key, value]) => {
    const { required, minLength, maxLength } = validationRules[key]
    const valid = value.length > minLength && value.length < maxLength || !required
    return { ...acc, [key]: valid }
  }, {})
}

export default function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie } = props
  const [rating, setRating] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const [validations, setValidations] = useState<{[key: string]: boolean}>({})
  const [isValid, setIsValid] = useState<boolean>(true)

  const addToWatchlist = (): void => {
    console.log(`Adding ${movie.title} to watchlist`)
  }

  const addRating = (rating: number): void => {
    setRating(rating)
  }

  const saveDescription = (): void => {
    setValidations(validate({ description }));
    setIsValid(Object.values(validations).every((valid) => valid));

    if (isValid) {
      console.log(`Saving description for ${movie.title}`, description)
    }
  }

  return (
    <>
      <Link href={`/movies/${movie.id}`} key={movie.id}>
        <p>{movie.title}</p>
      </Link>
      <p>{movie.description}</p>
      <div onClick={addToWatchlist}>+</div>
      <div>
        <p onClick={() => addRating(0)}>☒</p>
        <p onClick={() => addRating(1)}>{rating > 0 ? '★' : '☆'}</p>
        <p onClick={() => addRating(2)}>{rating > 1 ? '★' : '☆'}</p>
        <p onClick={() => addRating(3)}>{rating > 2 ? '★' : '☆'}</p>
        <p onClick={() => addRating(4)}>{rating > 3 ? '★' : '☆'}</p>
        <p onClick={() => addRating(5)}>{rating > 4 ? '★' : '☆'}</p>
      </div>
      <input className={validations.description === false ? 'not-valid' : 'valid'} type="text" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={saveDescription}>Save</button>
    </>
  );
}