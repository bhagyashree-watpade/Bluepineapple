// program for implementing a map using array(by considering that both the key and value are integer)

#include<stdio.h>
#include<string.h>
#define max_size 50
int key_arr[max_size];
int value_arr[max_size];



//function to get index of the key entered by the user

int getIndex(int key){
    int index =-1,i=0;
    while(key_arr[i]!=-1){
        if(key_arr[i]==key) return i;
        i++;
    }
    return index;
}

//function to insert a key value pair

void insert_Key_Value(int key,int value) {
    int i=0,isfound;
    //before inserting find wether the key already exist or not,if key exist then directly update the value corresponding to it
    isfound = getIndex(key);
    if(isfound!=-1) {
        value_arr[isfound] =  value;
        printf("%d already exist in the map, updated the value of %d as %d\n",key,key,value);
    } else{
        //if key does not exist then move till the last entry then append it 
        while(key_arr[i]!=-1){
            i++;
        }
        key_arr[i]=key;
        value_arr[i]=value;
        printf("%d : %d inserted successfully into tha map\n ",key,value);
    }
    

}

void print_Map(){
    int i=0;
    printf("Map:\nKey\t:\t Value \n");
    while(key_arr[i]!=-1){
        printf("%d\t:\t%d\n",key_arr[i],value_arr[i]);
        i++;
    }
}
int main(){
    int i,key,index;
    //initializing the key array to -1
    for(i=0;i<max_size;i++){
        key_arr[i]=-1;
    }

    //initializing the value array to -1
    for(i=0;i<max_size;i++){
        value_arr[i]=-1;
       // strcpy(value_arr[i], "-");
    }
    key_arr[0]=1;
    key_arr[1]=10;
    key_arr[2]=100;

    /*strcpy(value_arr[0], "a");
    strcpy(value_arr[1], "b");
    strcpy(value_arr[2], "c");*/

    value_arr[0]=1;
    value_arr[1]=2;
    value_arr[2]=3;

    printf("Enter a key to search into map : ");
    scanf("%d",&key);
    index = getIndex(key);
    if(index!=-1){
        printf("%d found at index : %d  \n",key,index);
    } else{
        printf("%d not found in map\n",key);
    }

    //accepting a key value pair to insert into map
    int c;
    printf("Enter a key to insert into map : ");
    scanf("%d",&key);
    printf("Enter a value for key %d : ",key);
    scanf("%d",&c);
    insert_Key_Value(key,c);
    print_Map();
    return 0;
}
