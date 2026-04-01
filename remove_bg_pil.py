from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # Using a threshold to catch near-white pixels
    threshold = 240
    for item in datas:
        # Check if r, g, b are all greater than threshold
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # Map the alpha smoothly if possible, but hard cut is safer
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg("public/logo.png", "public/logo_transparent.png")
    print("Background removed successfully")
