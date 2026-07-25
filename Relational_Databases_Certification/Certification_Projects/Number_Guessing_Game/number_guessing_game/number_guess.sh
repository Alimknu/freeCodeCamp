#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo "Enter your username:"

read USERNAME

EXISTING_USERNAME=$($PSQL "SELECT username FROM number_guess_users WHERE username='$USERNAME'")

if [[ -z $EXISTING_USERNAME ]]
then
  echo "Welcome, $USERNAME! It looks like this is your first time here."
  $($PSQL "INSERT INTO number_guess_users(username) VALUES('$USERNAME')")
else
  GAMES_PLAYED=$($PSQL "SELECT games_played FROM number_guess_users WHERE username='$EXISTING_USERNAME'")
  BEST_GAME=$($PSQL "SELECT best_game FROM number_guess_users WHERE username='$EXISTING_USERNAME'")
  echo "Welcome back, $EXISTING_USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

GUESSING_GAME() {
  NUMBER=$(( RANDOM % 1000 + 1))
  GUESSES=0

  echo "Guess the secret number between 1 and 1000:"
  read GUESS
  
  while [[ $GUESS != $NUMBER ]]

  do
    if [[ $GUESS =~ ^[0-9]+$ ]]
    then
      (( GUESSES++ ))
      if [[ $GUESS -gt $NUMBER ]]
      then
        echo "It's lower than that, guess again:"
      else
        echo "It's higher than that, guess again:"
      fi
    else
      echo "That is not an integer, guess again:"
    fi
    read GUESS
  done
  (( GUESSES++ ))

  echo "You guessed it in $GUESSES tries. The secret number was $NUMBER. Nice job!"

  BEST_GAME=$($PSQL "SELECT best_game FROM number_guess_users WHERE username='$USERNAME'")

  if [[ -z $BEST_GAME ]]
  then
    UPDATE_FIRST_BEST_GAME=$($PSQL "UPDATE number_guess_users SET best_game=$GUESSES WHERE username='$USERNAME'")
  else
    if [[ $GUESSES -lt $BEST_GAME ]]
    then
      UPDATE_BEST_GAME=$($PSQL "UPDATE number_guess_users SET best_game=$GUESSES WHERE username='$USERNAME'")
    fi
  fi

  UPDATE_GAMES_PLAYED=$($PSQL "UPDATE number_guess_users SET games_played = games_played + 1 WHERE username='$USERNAME'")
  
}

GUESSING_GAME