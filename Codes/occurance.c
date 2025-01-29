#include <stdio.h>

int main() {
    int n, digit;
    int occurance[10] = {0};  
    printf("Enter a number: ");
    scanf("%d", &n);

    // Count the frequency of each digit
    while (n != 0) {
        digit = n % 10;
        occurance[digit]++;  
        n = n / 10;  
    }

    // Print the frequencies of each digit
    printf("\nDigit Frequencies:\n");
    for (int i = 0; i < 10; i++) {
        if (occurance[i] > 0) {
            printf("%d: %d\n", i, occurance[i]);
        }
    }

    return 0;
}
