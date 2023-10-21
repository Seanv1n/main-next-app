import requests, os, arrow, time, json

date = arrow.now().shift(months=-1).format("YYYY-MM")

def GetStats():
    directory = "./txt/"
    filename = f"moveset{date}.txt"
    file_path = os.path.join(directory, filename)

    url = 'https://www.smogon.com/stats/' + date + '/moveset/gen9vgc2023regulatione-1760.txt'

    response = requests.get(url).text

    if not os.path.exists(directory):
        os.makedirs(directory)

    with open(file_path, "w+") as file:
        file.write(response)

    print('Data has been updated...')

def MoveSetParser():
    strip_counter = 0
    field_flag = 0
    gates = {
        "name": 1,
        "ability": 0,
        "item": 0,
        "spread": 0,
        "move": 0,
        "team": 0,
    }

    counter = 0
    data_list = []
    abilities = []
    items = []
    spreads = []
    moves = []
    teammates = []
    with open('./txt/moveset' + date +'.txt') as f:
        for line in f:
            pokemon = {}

            if line.strip() == '+----------------------------------------+':
                strip_counter += 1
                continue
            if strip_counter == 1:
                result = line.lstrip(' |').strip().rstrip('|')
                name = result.strip()
            elif strip_counter == 2:
                continue
            elif strip_counter == 3:
                result = line.lstrip(' |').strip().rstrip('|')
                ability_name = result
                if ability_name.strip()[:-8] == "A":
                    continue
                ability_perc = result.split()[-1]
                ability = {
                    "name": ability_name.strip()[:-8],
                    "percentage": ability_perc
                }
                abilities.append(ability)
            elif strip_counter == 4:
                result = line.lstrip(' |').strip().rstrip('|')
                item_name = result
                if item_name.strip()[:-8] == "":
                    continue
                item_perc = result.split()[-1]
                item = {
                    "name": item_name.strip()[:-8],
                    "percentage": item_perc
                }
                items.append(item)
            elif strip_counter == 5:
                spread = {
                    "name": "",
                    "percentage": ""
                }
                result = line.lstrip(' |').strip().rstrip('|')
                spread_name = result
                if spread_name.strip()[:-8] == "":
                    continue
                spread_perc = result.split()[-1]
                spread["name"] = spread_name.strip()[:-8]
                spread["percentage"] = spread_perc
                spreads.append(spread)
            elif strip_counter == 6:
                move = {
                    "name": "",
                    "percentage": ""
                }
                result = line.lstrip(' |').strip().rstrip('|')
                move_name = result
                if move_name.strip()[:-8] == "":
                    continue
                move_perc = result.split()[-1]
                move["name"] = move_name.strip()[:-8]
                move["percentage"] = move_perc
                moves.append(move)
            elif strip_counter == 7:
                teammate = {
                    "name": "",
                    "percentage": ""
                }
                result = line.lstrip(' |').strip().rstrip('|')
                teammate_name = result
                if teammate_name.strip()[:-8] == "T":
                    continue
                teammate_perc = result.split()[-1]
                teammate["name"] = teammate_name.strip()[:-8]
                teammate["percentage"] = teammate_perc
                teammates.append(teammate)
            elif strip_counter >= 8:
                strip_counter = -1
                pokemon["name"] = name
                pokemon["abilities"] = abilities
                pokemon["items"] = items
                pokemon["spreads"] = spreads
                pokemon["moves"] = moves
                pokemon["teammates"] = teammates
                data_list.append(pokemon)
                abilities = []
                items = []
                spreads = []
                moves = []
                teammates = []
                continue

    # Write data_list to a JSON file
    directory = "./json/"
    filename = f"output{date}.json"
    file_path = os.path.join(directory, filename)

    if not os.path.exists(directory):
        os.makedirs(directory)

    # Write the data to the file
    with open(file_path, 'w') as f:
        json.dump(data_list, f, indent=4)

    print("Output written to output.json successfully.")

def main():
    time_start = time.time()
    print("time start:{}".format(arrow.now()))

    GetStats()
    MoveSetParser()

    time_end = time.time()
    time_length = time.strftime("%H:%M:%S", time.gmtime(float(time_end - time_start)))
    print("time end:{}".format(arrow.now()))
    print("total time:{}".format(time_length))

if __name__ == '__main__':
    main()