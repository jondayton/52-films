'use client';

import '@/app/globals.css';
import { Movie } from '@/interfaces/models';
import Link from 'next/link';
import { useState } from 'react';
import { Card, Rating, Button } from 'flowbite-react';

export interface MovieCardProps {
  movie: Movie;
  rating: number;
}

interface ValidationRule {
  required: boolean;
  minLength: number;
  maxLength: number;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

const validationRules: ValidationRules = {
  description: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
};

/**
 * Validates form field data
 * @param data an object of keys and validation rules to apply
 * @returns an object of key validations and a boolean as to whether or not they passed validation
 */
const validate = (data: { description: string }): { [key: string]: boolean } => {
  return Object.entries(data).reduce((acc: { [key: string]: boolean }, [key, value]) => {
    const { required, minLength, maxLength } = validationRules[key];
    const valid = (value.length > minLength && value.length < maxLength) || !required;
    return { ...acc, [key]: valid };
  }, {});
};

/**
 * A card component to display and rate movies
 */
export default function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie } = props;
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [validations, setValidations] = useState<{ [key: string]: boolean }>({});
  const [isValid, setIsValid] = useState<boolean>(true);

  const addToWatchlist = (): void => {
    console.log(`Adding ${movie.title} to watchlist`);
  };

  const addRating = (rating: number): void => {
    setRating(rating);
  };

  const saveDescription = (): void => {
    setValidations(validate({ description }));
    setIsValid(Object.values(validations).every((valid) => valid));

    if (isValid) {
      console.log(`Saving description for ${movie.title}`, description);
    }
  };

  return (
    <Card>
      <Link href={`/movies/${movie.id}`} key={movie.id}>
        <p>{movie.title}</p>
      </Link>
      <p>{movie.description}</p>
      <button onClick={addToWatchlist}>+</button>
      <Rating>
        <Rating.Star onClick={() => addRating(1)} filled={rating > 0} />
        <Rating.Star onClick={() => addRating(2)} filled={rating > 1} />
        <Rating.Star onClick={() => addRating(3)} filled={rating > 2} />
        <Rating.Star onClick={() => addRating(4)} filled={rating > 3} />
        <Rating.Star onClick={() => addRating(5)} filled={rating > 4} />
      </Rating>
      <input
        className={validations.description === false ? 'not-valid' : 'valid'}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={saveDescription} color="blue">Save</Button>
    </Card>
  );
}
