"use client"

import {
  control,
  divIcon,
  map as createMap,
  marker,
  tileLayer,
  type LatLngExpression,
  type Map as LeafletMap,
} from "leaflet"
import { useEffect, useRef } from "react"

const position: LatLngExpression = [52.3638403, 4.8852537]

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return
    }

    const leafletMap = createMap(containerRef.current, {
      attributionControl: false,
      center: position,
      scrollWheelZoom: false,
      zoom: 16,
      zoomControl: false,
    })

    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(leafletMap)

    const markerIcon = divIcon({
      className: "",
      html: `
        <div class="jiji-map-marker">
          <span class="jiji-map-marker-logo" aria-hidden="true"></span>
          <span class="jiji-map-marker-copy">
            <span class="jiji-map-marker-title">JiJi's Here!</span>
            <span class="jiji-map-marker-address">Leidsekruisstraat 10</span>
          </span>
        </div>
      `,
      iconAnchor: [110, 82],
      iconSize: [220, 82],
      popupAnchor: [0, -78],
    })

    marker(position, { icon: markerIcon })
      .bindPopup("<strong>JiJi Fried Chicken</strong><br />Leidsekruisstraat 10, Amsterdam")
      .addTo(leafletMap)

    control.attribution({ position: "bottomleft", prefix: false }).addTo(leafletMap)
    control.zoom({ position: "bottomright" }).addTo(leafletMap)
    mapRef.current = leafletMap

    return () => {
      leafletMap.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      role="application"
      aria-label="Map showing JiJi Fried Chicken near Leidsekruisstraat 10 in Amsterdam"
    />
  )
}
