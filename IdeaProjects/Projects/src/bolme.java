import java.util.Scanner;

public class bolme {

    public static void main(String[] args) {

        System.out.println("Birinci Sayı: ");
        Scanner s = new Scanner(System.in);
        long sayi1 = s.nextLong();
        System.out.println("İkinci Sayı: ");
        long sayi2 = s.nextLong();
        if (sayi2 == 0 ){

            System.out.println("Hata. Bir sayı sıfıra bölünemez");
            System.out.println("Program Sonlandı...");

        }
        else {
            System.out.println("Sonuç: " + (sayi1 / sayi2));
        }

    }
}