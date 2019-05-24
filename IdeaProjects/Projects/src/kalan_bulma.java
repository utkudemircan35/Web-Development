import java.util.Scanner;

public class kalan_bulma {

    public static void kalan (){

        Scanner s = new Scanner(System.in);
        System.out.println("Sayıyı Giriniz: ");
        double sayi1 = s.nextDouble();
        System.out.println("İkinci Sayıyı Giriniz: ");
        double sayi2 = s.nextDouble();
        if (sayi2 == 0 ){

            System.out.println("Hata. Bir Sayı sıfıra bölünemez ");
        }
        else {

            System.out.println(sayi1 + ", " + sayi2 +" bölümünden kalan: "+(sayi1%sayi2));

        }

    }

}
