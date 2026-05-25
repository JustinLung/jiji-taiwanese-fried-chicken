import Check from "@/components/icons/Check"
import Flame from "@/components/icons/Flame"
import Medal from "@/components/icons/Medal"
import Spark from "@/components/icons/Spark"
import Star from "@/components/icons/Star"

export const icons = {
  check: Check,
  flame: Flame,
  medal: Medal,
  spark: Spark,
  star: Star,
}

export const marqueeItems = [
    { label: "Taiwanese Street Food", icon: "flame" },
    { label: 'Jumbo 12" Cutlet', icon: "medal" },
    { label: "Always Crunchy", icon: "spark" },
    { label: "Fresh Daily At 5:00 AM", icon: "check" },
    { label: "Secret Night Market", icon: "star" },
  ] satisfies Array<{
    icon: keyof typeof icons
    label: string
  }>