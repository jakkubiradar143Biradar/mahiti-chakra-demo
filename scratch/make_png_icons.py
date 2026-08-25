import os
from PIL import Image, ImageDraw, ImageFont

def create_pwa_icon(size, filename):
    # Create RGBA image
    img = Image.new('RGBA', (size, size), (245, 158, 11, 255)) # Gold background
    draw = ImageDraw.Draw(img)

    # Inner slate rounded rect
    margin = int(size * 0.05)
    inner_box = [margin, margin, size - margin, size - margin]
    draw.rounded_rectangle(inner_box, radius=int(size * 0.15), fill=(15, 23, 42, 255))

    # Center Gold Circle
    center_margin = int(size * 0.25)
    circle_box = [center_margin, center_margin, size - center_margin, size - center_margin]
    draw.ellipse(circle_box, fill=(245, 158, 11, 255))

    # Save as true PNG
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    img.save(filename, 'PNG')
    print(f"Successfully generated true binary PNG: {filename} ({size}x{size})")

create_pwa_icon(192, 'public/icon-192.png')
create_pwa_icon(512, 'public/icon-512.png')
