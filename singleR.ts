//Single Responsibility Principle 

    class Flight {
        FlightNumber: any; 
        CompanyName:string;
        GateNumber: number;

        constructor(FlightNumber: any, CompanyName: string, GateNumber:number) {
            this.FlightNumber = FlightNumber;
            this.CompanyName = CompanyName;
            this.GateNumber = GateNumber;
        }
    }

    let flights: Flight[] = [];
     class FlightAnnouncements{
        
        add(): Flight[] {
       
            flights.push(new Flight('TKY1786',"Türk Hava yolları", 280));
            flights.push(new Flight('PGS1883', "Pegasus",237));
            flights.push(new Flight('BSS1889', "BoraJet",240));
            flights.push(new Flight('ATY1107', "AnadoluJet",251));
            flights.push(new Flight('SUN1425', "Sun Express",203));

            return flights;
    
        }
                   
     }
    class DoAnnouncements {

        writeToConsole(flights: Flight[]) {
            flights.forEach(x => {
              console.log( `${x.FlightNumber} Uçuş numaralı ${x.CompanyName} yolcuları,uçağa binişiniz için ${x.GateNumber} numaralı kapıya gelmeniz ricada bulunur.`) ;

            })
        }
    }
    let FlightAnnouncement= new FlightAnnouncements();
    FlightAnnouncement.add();
    let Announcement1 = new DoAnnouncements()
    Announcement1.writeToConsole(flights);
    


