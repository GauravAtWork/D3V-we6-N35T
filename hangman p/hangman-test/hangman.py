import string
from words import choose_word
from images import IMAGES
'''
Important instruction
* function and variable name snake_case -> is_prime
* contant variable upper case PI
'''
def display_image(image_index):
    return IMAGES[image_index]


def is_word_guessed(secret_word, letters_guessed):
    
    secret_word = sorted(list(set(secret_word)))
    letters_guessed = sorted(letters_guessed)

    temp = True
    for x in secret_word:
        if x in letters_guessed:
            pass
        else:
            temp = False

    return temp


def get_guessed_word(secret_word, letters_guessed):
   
    index = 0
    guessed_word = ""
    while (index < len(secret_word)):
        if secret_word[index] in letters_guessed:
            guessed_word += secret_word[index]
        else:
            guessed_word += "_"
        index += 1
    return guessed_word


def get_available_letters(letters_guessed):
    
    all_letters = "abcdefghijklmnopqrstuvwxyz"
    all_letters = set(all_letters)
    
    letters_guessed = set(letters_guessed)
    
    letters_left = sorted(list(all_letters - letters_guessed))
    
    letters_left = "".join(letters_left)
    return letters_left



def hint(secret_word, letters_guessed):
    empty = []
    for char in secret_word:
        if (char not in letters_guessed):
            empty.append(char)
            
        
    random = random.choice(empty)
    
    return random

def hangman(secret_word):
    '''
    secret_word (string) : secret word to guessed by the user.

    Steps to start Hangman:

    * In the beginning of the game user will know about the total characters in the secret_word    

    * In each round user will guess one character 

    * After each character give feedback to the user
      * right or wrong

    * Display partial word guessed by the user and use underscore in place of not guess word    
    '''
    lives = 8
    hints =1
    
    print("REMAINING LIVES :", lives)
    print("REMAINING HINTS :", hints)
    print("Welcome to the game, Hangman!")
    print("I am thinking of a word that is {} letters long.".format(
        str(len(secret_word))), end='\n\n')

    letters_guessed = []

    while lives!=0 and hints !=0 :

        available_letters = get_available_letters(letters_guessed)
        print("Available letters: {} ".format(available_letters))

        guess = input("Please guess a letter: ")
        letter = guess.lower()
        

        if letter in secret_word:
            letters_guessed.append(letter)
            print("Good guess: {} ".format(
                get_guessed_word(secret_word, letters_guessed)))
            if is_word_guessed(secret_word, letters_guessed) == True:
                print(" * * Congratulations, you won! * * ", end='\n\n')
                break
        elif letter == "hint":
            hints -= 1
            letters_guessed.append(hint(secret_word, letters_guessed))
            
            print("HINT USED : {}".format(get_guessed_word(secret_word, letters_guessed)))
            
            

            if is_word_guessed(secret_word, letters_guessed) == True:
                print(" * * Congratulations, you won! * * ", end='\n\n')
                break
        else:
            lives-=1
            print("Oops! That letter is not in my word: {} ".format(
                get_guessed_word(secret_word, letters_guessed)))
            letters_guessed.append(letter)
            print(display_image(8 - (lives)))

            continue


# Load the list of words into the variable wordlist
# So that it can be accessed from anywhere in the program


secret_word = choose_word()
hangman(secret_word)
print("The word was", secret_word)
print("BETTER LUCK NEXT TIME ! :)")
