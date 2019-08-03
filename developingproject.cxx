#include <iostream>
#include <array>
#include <map>
#include <vector>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

/*
 Description:
    "Defend the Base"
 
 Features:
    Creates random objects/entities
    and displays them, along with an
    empty board. */

// function for random number ranges
int randAtoB(int a, int b) {
    return (rand() % (b - a + 1) + a);
}

int convertDirection(char dir) {
    if (dir == 'D' || dir == 'R')
        return 1;
    else
        return -1;
}

class Missile {
private:
    int speed;
    int power;
    int frame;
    int xpos;
    int ypos;
    bool offGrid;
    bool exploded;
    vector<char> movementDirections;
    
public:
    int getX();
    int getY();
    void update(const int boardSz);
    void launch(int x, int y);
    void display() const;
    
public:
    Missile(int spd, int pwr);
};
Missile::Missile(int spd, int pwr)
: speed(spd), power(pwr), frame(0)
, xpos(0)
, ypos(0)
, offGrid(false)
, exploded(false)
{
    int nDirections = randAtoB(2, 6);
    for (int i = 0; i < nDirections; ++i) {
        
        if (i % 2) { // for a missile, every other direction must be up.
            
            int dir = randAtoB(0, 2); // 0, 1, or 2
            
            if (dir == 1) movementDirections.push_back('R');
            else if (dir == 2) movementDirections.push_back('U');
            else movementDirections.push_back('L');
            
        }
        else {
            
            movementDirections.push_back('U');
            
        }
    }
}
int Missile::getX() { return xpos; }
int Missile::getY() { return ypos; }
void Missile::update(const int boardSz) {
    if (xpos >= boardSz || xpos < 0 || ypos >= boardSz || ypos < 0) {
        offGrid = true;
    }
    
    if (!offGrid) {
        char dir = movementDirections[frame];
        if (dir == 'U' || dir == 'D') {
            ypos += convertDirection(dir) * speed;
        }
        else {
            xpos += convertDirection(dir) * speed;
        }
        
        frame++;
        frame %= movementDirections.size();
    }
    else {
        exploded =  true;
    }
}
void Missile::launch(int x, int y) {
    xpos = x;
    ypos = y;
}
void Missile::display() const {
    cout << "X-POS: " << xpos << " | Y-POS: " << ypos << " | SPD: " << speed << " | PWR: " << power;
    if (exploded) {
        cout << "  HIT!";
    }
    cout << endl;
}

class Entity {
private:
    vector<char> movementDirections;
    int speed;
    bool isAlly;
    bool isDead;
    int width;
    int height;
    int xpos;
    int ypos;
    
public:
    void display() const;
    
public:
    Entity(int spd, bool isAlly, int xpos, int ypos, int w, int h);
};
Entity::Entity(int spd, bool isAlly, int x, int y, int w, int h)
: speed(spd)
, isAlly(isAlly)
, xpos(x)
, ypos(y)
, width(w)
, height(h)
, isDead(false)
{
    int nDirections = randAtoB(2, 4);
    movementDirections.reserve(nDirections);
    int i;
    for (i = 0; i < nDirections; ++i) {
        int dir = randAtoB(0, 3);
        switch (dir) {
            case 0:
                movementDirections.push_back('R');
                break;
            case 1:
                movementDirections.push_back('L');
                break;
            case 2:
                movementDirections.push_back('U');
                break;
            case 3:
                movementDirections.push_back('D');
                break;
            default:
                movementDirections.push_back('R');
        }
    }
}
void Entity::display() const {
    cout << "SPD: " << speed;
    cout << " | ALLY: ";
    if (isAlly) cout << "YES";
    else cout << "NO";
    cout << " | X-POS: " << xpos << " | Y-POS: " << ypos << endl;
}

class RadarBoard {
private:
    int size;
    int nMissiles;
    vector< vector<char> > board;
    vector<Entity> entities;
    vector<Missile> missiles;
    
public:
    void display() const;
    void showEntities() const;
    void generateEntities();
    void launchMissiles();
    void update();
    
public:
    RadarBoard(int size, int nMissiles);
};
RadarBoard::RadarBoard(int size, int nMissiles)
: size(size), nMissiles(nMissiles)
{
    // fill board with emptyness (like my soul)
    board.reserve(size);
    int i;
    for (i = 0; i < size; ++i) {
        board.push_back(vector<char>(size, '*'));
    }
    
    // create and fill entities randomly
    int nEnts = randAtoB(4, 10);// 4 - 10 entities
    entities.reserve(nEnts);
    for (i = 0; i < nEnts; ++i) {
        int spd = randAtoB(1, 4);
        bool ally = randAtoB(0, 1);
        int x = randAtoB(0, size - 1);
        int y = randAtoB(0, size - 1);
        int w = randAtoB(1, 5);
        int h = randAtoB(1, 5);
        Entity e(spd, ally, x, y, w, h);
        entities.push_back(e);
    }
    
    // create and fill missiles randomly
    missiles.reserve(nMissiles);
    for (i = 0; i < nMissiles; ++i) {
        int spd = randAtoB(1, 4);
        int pwr = randAtoB(1, 4);
        Missile m(spd, pwr);
        missiles.push_back(m);
    }
    
    missiles[0].launch(4, size - 1);
    
}
void RadarBoard::display() const {
    
    int i;
    for (i = 0; i < missiles.size(); ++i) {
        cout << "\nMissile " << i + 1 << endl;
        missiles[i].display();
    }
    cout << endl;
}
void RadarBoard::showEntities() const {
    
    int i;
    for (i = 0; i < entities.size(); ++i) {
        cout << "\nEntity " << i + 1 << endl;
        entities[i].display();
    }
}
void RadarBoard::update() {
    int i;
    for (i = 0; i < missiles.size(); ++i) {
        missiles[i].update(size);
    }
}
void RadarBoard::launchMissiles() {
    int i;
    for (i = 0; i < missiles.size(); ++i) {
        int x = randAtoB(0, size - 1);
        missiles[i].launch(x, size - 1);
    }
}

int main() {
    srand(static_cast<unsigned int>(time(nullptr)));
    
    int boardSize = 15, nMissiles = 5;
    
    cin >> boardSize >> nMissiles;
    
    if (boardSize < 10 || boardSize > 30)
        boardSize = 15;
    if (nMissiles <= 0 || nMissiles > 15)
        nMissiles = 5;
    
    RadarBoard rb(boardSize, nMissiles);
    // calc missile paths
    rb.launchMissiles();
    rb.display();
    for (int i = 0; i < 10; ++i) {
        rb.update();
        rb.display();
    }
    // rb.display();
    // rb.showEntities();
    
    //cout << boardSize << ", " << nMissiles << endl;
    
    return 0;
}