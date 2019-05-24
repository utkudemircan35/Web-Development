import java.util.Scanner;

public class Derece {
    public static void main(String[] args) {
        while (true) {

            System.out.println("-------------------------\n1.Celcius to Fahrenheit\n2.Fahrenheit to Celcius\n3.Kelvin to Celcius\n4.Kelvin to Fahrenheit\n5.Celcius to Kelvin\n6.Fahrenheit to Kelvin");
            Scanner scan = new Scanner(System.in);
            String sorgu = scan.nextLine();
            switch (sorgu) {
                case "1":
                    System.out.println("Celcius: ");
                    double derece = scan.nextDouble();
                    double sonuc = ((derece*180)/100)+32;
                    System.out.println("Celcius = "+derece+"\nFahrenhiet = "+sonuc );
                    continue;

                case "2":
                    System.out.println("Fahrenheit: ");
                    double derece2 = scan.nextDouble();
                    double sonuc2 = (((derece2-32)*100)/180);
                    System.out.println("Fahrenheit = "+derece2+"\nCelcius = "+sonuc2 );
                    continue;

                case "3":
                    System.out.println("Kelvin: ");
                    double derece3 = scan.nextDouble();
                    if (derece3 < 0  ){
                        System.out.println("Kelvin 0'dan küçük olamaz!");
                        continue;

                    }
                    else{
                        double sonuc3 =derece3-273;
                        System.out.println("Kelvin = "+derece3+"\nCelcius = "+sonuc3);
                    }
                    continue;

                case "4":
                    System.out.println("Kelvin: ");
                    double derece4 = scan.nextDouble();
                    if (derece4 < 0  ){
                        System.out.println("Kelvin 0'dan küçük olamaz!");
                        continue;

                    }
                    else{
                        double sonuc4 =(((derece4-273)*180)/100)+32;
                        System.out.println("Kelvin = "+derece4+"\nFahrenheit = "+sonuc4);

                    }
                    continue;
                case "5":
                    System.out.println("Celcius: ");
                    double derece5 = scan.nextDouble();
                    double sonuc5 = derece5+273;
                    System.out.println("Celcius = "+derece5+"\nKelvin = "+sonuc5);
                    continue;

                case "6":
                    System.out.println("Fahrenheit: ");
                    double derece6 = scan.nextDouble();
                    double sonuc6 = (((derece6-32)*100)/180)+273;
                    System.out.println("Fahrenheit = "+derece6+"\nKelvin = "+sonuc6);
                    continue;
                default:
                    continue;

            }


        }

    }
}
