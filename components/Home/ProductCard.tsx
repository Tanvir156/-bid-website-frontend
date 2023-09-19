import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "next/link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import { GetStaticPaths } from "next";
export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
        marginBottom: "5px",
      }}
    >
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 100 }}>
          <Image
            src={product.images[0]}
            alt="image"
            fill
            object-fit="cover"
            placeholder="blur"
            blurDataURL="data:image/png..."
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        {/* <Typography level="body-xs">{product.selectedCategory}</Typography> */}
        <Link
          href={`/product/${product._id}`}
          color="neutral"
          style={{ textDecoration: "none" }}
          // endDecorator={<ArrowOutwardIcon />}
        >
          {product.title}
        </Link>

        <Typography
          level="title-lg"
          fontWeight="bold"
          color="neutral"
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              {product.selectedDistric}
            </Chip>
          }
        >
          {product.price} tk
        </Typography>
        {/* <Typography level="body-sm">
          (Only <b>{product.stock}</b> left in stock!)
        </Typography> */}
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="primary" size="lg">
          Bid Now
        </Button>
      </CardOverflow>
    </Card>
  );
}
