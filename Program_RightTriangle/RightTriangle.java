    import java.util.*;
public class RightTriangle
{
public static void main(String[] args)
{
Scanner input=new Scanner(System.in);
System.out.println("Right Triangle");
int number=input.nextInt();
int n=1;
int max=1;
int temp;
int pmax=1;
while(max<number){
    pmax=max;
    n+=1;
    max+=n;
    if (max==number){
        pmax=max;
     
    }
    if (max>number){
        //max=pmax;
       n=n-1;
    }
}
System.out.println(“Max number to print”+pmax);

System.out.println(“Number of rows”+n);
pmax-=n;
temp=pmax+1;

for(int i=n;i>=1;i--){
    
 for(int j=1;j<=i;j++) {
     System.out.print(temp+" ");
 temp++;
 
 }
 System.out.println();
 pmax-=(i-1);
 temp=pmax+1;
 }
}
}

