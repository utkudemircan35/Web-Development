import java.util.Scanner;
import java.math.*;
public class us_bulma {

    public static void main(String[] args) {

        System.out.println("Birinci Sayı: ");
        Scanner s = new Scanner(System.in);
        double sayi1 = s.nextDouble();
        System.out.println("İkinci Sayı: ");
        double sayi2 = s.nextDouble();
        System.out.println("Sonuç: "+ Math.pow(sayi1,sayi2));


    }
}
