import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import { Recitales } from "@prisma/client"

interface ConcertCardProps {
  concert: Recitales
}

export function ConcertCard({ concert }: ConcertCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={"/placeholder.svg"} alt={concert.descripcion} fill className="object-cover" priority />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{concert.descripcion}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          {formatDate(concert.fechaYHora.toLocaleDateString())}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          {concert.ubicacion}
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-sm text-muted-foreground">{concert.descripcion}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="font-bold">${concert.precioDeEntrada.toFixed(2)}</div>
        <Button asChild>
          <Link href={`/concerts/${concert.id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
