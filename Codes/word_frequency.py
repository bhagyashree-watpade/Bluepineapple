#word frequency using map

#stop words
stop_words = ["the", "is","or","an","has","had","are","you","it" "a", "and", "in", "on", "to", "with"]

text = "Information technology is the concept that includes every process of information flow, such as data collection, processing, storage, search, transmission, and reception. In the information society, information technology is one of the most necessary industries. As technology advances day by day, IT has developed into an essential part. It is also attracting future industries. In the future, the use of information technology will be more important in the overall industry. The development of the internet made it possible for the world to be connected. IT will be a power that makes an increasing number of promising occupations and science and technology"

words = []  # list to store unique words other than stopping word
frequencies = []  # list to store the frequency of word other than stopping word

'''
steps:
        1.Convert the text to lowercase and split it into words
        2.Remove punctuation marks if any 
        3.Check word is stop word or not
            3.1 if not ->check word is already in the list, increment its frequency
                else  word is new then add it  to the list and make its frequency as 1
'''


updated_text = text.lower().split()

for word in updated_text:
    
    word = word.strip(".,!?\"'")
    if word not in stop_words:
        if word in words:
            index = words.index(word)
            frequencies[index] += 1
        else:
           
            words.append(word)
            frequencies.append(1)


print("\nWord Frequencies:")
for i in range(len(words)):
    print(f"{words[i]}: {frequencies[i]}")
