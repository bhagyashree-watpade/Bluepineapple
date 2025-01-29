// Creating Binary Tree using Array
#include<stdio.h>
#include<stdlib.h>
#define max_size 50
/*
	steps:
	A) create BST
			1: accept the total number of values to be inserted into BST
			2: create a fixed size array, and initialize it to -1
			3: create a function to create a BST which accepts data,index
				3.1 : check if the index > size of array -> if yes -> array is full
				else:
				3.2 : check wether the position at the index is vacant or not 
						if it is vacant :  then put the data at that position
						if it is not vacant then check wether the data is lesser or greater than the value at that index
							if it is lesser , then update index as index*2 (ie. left child)->call the function again to create BST
							if it is greater, then update index as (index*2)+1 (ie. right child) ->call the function again to create BST
			4: iteratively accept the data for each node and pass it to the createBSt function
			
			
			*/

void CreateBST(int n[],int data, int index)
{
	if(index>=max_size)
	printf("\n\n TREE is full!!!");
	else
		if(n[index]==-1)
			n[index]=data;
		else
			if(data<n[index])
				CreateBST(n,data,index*2);
			else
				CreateBST(n,data,((index*2)+1));	
						
	
}
void Inorder(int num[],int index)
//order: left,data,right
{
	if(num[index]!=-1)
	{
		Inorder(num,index*2);
		printf("%d\t",num[index]);
		Inorder(num,((index*2)+1));
	}
}




void Preorder(int num[],int index)
{
    //order : data, left, right
	if(num[index]!=-1)
	{
		printf("%d\t",num[index]);
		Preorder(num,index*2);
		Preorder(num,((index*2)+1));
	}
}

void Postorder(int num[],int index)
{
    //order: left,right,data
	if(num[index]!=-1)
	{
	
		Postorder(num,index*2);
		Postorder(num,((index*2)+1));
		printf("%d\t",num[index]);
	}
}

int main()
{
	int number[max_size];
    int i,data,n;
	for(i=1;i<max_size;i++)
	{
		number[i]=-1;
	}
	printf("\nHow many values do you want to enter for Binary search Tree ???");
	scanf("%d",&n);
	int temp=n;
	do
	{
		printf("\n\nEnter the value=");
		scanf("%d",&data);
		CreateBST(number,data,1);
		n--;
		
	}while(n!=0);
	printf("\n Binary Tree is:");
	int j=(temp*2)+1;
	for(i=1;i<=j+1;i++)
	{
	printf(" %d  ",number[i]);
	}
    printf("\n Postorder : \t");
	Postorder(number,1);
    printf("\n Preorder : \t");
	Preorder(number,1);
	printf("\n Inorder : \t");
	Inorder(number,1);
	
	
    return 0;
}
